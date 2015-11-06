/**
 * Created by sgl on 28/10/15.
 */
angular.module('consultantui.filter', [])
  .filter('imageSpliter', function () {
    return function (input, value) {
      // value can be 'registry', "image', 'imagefull', or 'version'
      //split registry/image:version
      var registyIndex = input.indexOf('/');
      var versionIndex = input.indexOf(":");

      if (value.equals('image')) {
        return input.substring(registyIndex, versionIndex);
      } else if (value.equals('version')) {
        return input.substr(versionIndex);
      } else if (value.equals('imagefull')) {
        return input.substring(0, versionIndex);
      } else {
        return input.subtring(0, registyIndex);
      }
    }
  });
