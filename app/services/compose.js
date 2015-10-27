/**
 * Created by sgl on 21/10/15.
 */
var compose = angular.module('consultantui.services.compose', ['ngResource', 'pouchdb']);
compose.factory('Application', ['$q', function ($q) {
  'use strict';

  return {
    // https://docs.docker.com/compose/reference/docker-compose/
    build: function () {
      console.log("Build App");
    },
    kill: function () {
      console.log("kill App");
    },
    logs: function () {
      console.log("logs App");
    },
    port: function () {
      console.log("port App");
    },
    ps: function () {
      console.log("ps App");
    },
    pull: function () {
      console.log("pull App");
    },
    restart: function () {
      console.log("restart App");
    },
    rm: function () {
      console.log("rm App");
    },
    scale: function () {
      console.log("scale App");
    },
    start: function () {
      console.log("start App");
    },
    stop: function () {
      console.log("stop App");
    },
    up: function () {
      console.log("up App");
    },
    migrateToLabels: function () {
      console.log("migrateToLabels App");
    },
    get: function (id, succe, e) {
      console.log("Get App");
      var deferred = $q.defer();
      deferred.resolve({
        Name: "My app",
        State: {
          Running: true
        }
      });
      deferred.promise.then(succe, e);
    }
  };
}]);
compose.factory('ApplicationStore', ['pouchDB', function (pouchDB) {
  'use strict';
  var db = pouchDB('consultantui');
// document that tells PouchDB/CouchDB
// to build up an index on doc.name
  var ddoc = {
    _id: '_design/my_index',
    views: {
      by_name: {
        map: function (doc) {
          emit(doc.Name);
        }.toString()
      }
    }
  };
// save it
  db.put(ddoc).then(function () {
    // success!
  }).catch(function (err) {
    // some error (maybe a 409, because it already exists?)
  });
  return {
    create: function () {
      return {
        Name: 'New App',
        Services: {
          "db": {
            "image": "postgres:9.4",
            "environment": [
              "POSTGRES_PASSWORD=nuxeo",
              "POSTGRES_USER=nuxeo"
            ],
            "volumes": [
              "/media/sgl/DATA/projet/keendo/nuxeo-docker/psql:/var/lib/postgresql/data"
            ]
          },
          "elastic": {
            "image": "elasticsearch:1.5.2",
            "environment": [
              "es.node.name=nuxeo"
            ]
          },
          "nuxeo": {
            "image": "nuxeo:6",
            "links": [
              "db",
              "elastic"
            ],
            "ports": [
              "8080:8080"
            ],
            "volumes": [
              "/media/sgl/DATA/projet/keendo/nuxeo-docker/plugins:/opt/nuxeo/nxserver/plugins",
              "/media/sgl/DATA/projet/keendo/nuxeo-docker/nuxeo-data:/opt/nuxeo/data",
              "/media/sgl/DATA/projet/keendo/nuxeo-docker/nuxeo-log:/opt/nuxeo/log",
              "/media/sgl/DATA/projet/keendo/nuxeo-docker/marketplace:/marketplace"
            ]
          }
        }
      }
    },
    get: function (data) {
      return db.get(data.id);
    },
    save: function (data) {
      console.log(data.app);
      if (!data.app._id) {
        data.app._id = data.app.Name;
      }
      return db.bulkDocs([data.app]);
    },
    query: function () {
      return db.allDocs({
        include_docs: true,
        attachments: true
      });
      //return db.query('my_index/by_name',{include_docs : true});
    }
  };
}]);
