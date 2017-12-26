'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _menu = require('material-ui/svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _person = require('material-ui/svg-icons/social/person');

var _person2 = _interopRequireDefault(_person);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\huang yung yu\\Desktop\\github\\ssr-redux\\components\\Header\\Header.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  align-self: center;\n  background-color: #717070;\n  display: flex;\n  height: 50px;\n  position: relative;\n'], ['\n  align-self: center;\n  background-color: #717070;\n  display: flex;\n  height: 50px;\n  position: relative;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  align-self: center;\n  display: inline-flex;\n  padding: 0 20px;\n'], ['\n  align-self: center;\n  display: inline-flex;\n  padding: 0 20px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  align-self: center;\n  margin: 0 auto;\n\n  img {\n    height: 25px;\n  }\n'], ['\n  align-self: center;\n  margin: 0 auto;\n\n  img {\n    height: 25px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  right: 0;\n'], ['\n  position: absolute;\n  right: 0;\n']);

var LudoLogoSrc = '/static/LudoLogo.png';

var HeaderWrapper = _styledComponents2.default.div(_templateObject);

var IconWrapper = _styledComponents2.default.div(_templateObject2);

var LogoWrapper = IconWrapper.extend(_templateObject3);

var ProfileWrapper = IconWrapper.extend(_templateObject4);

var Logo = function Logo() {
  return _react2.default.createElement(LogoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('img', { alt: 'logo', src: LudoLogoSrc, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }));
};

var Menu = function Menu() {
  return _react2.default.createElement(IconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(_menu2.default, { color: _colors.white, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }));
};

var Profile = function Profile() {
  return _react2.default.createElement(ProfileWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_person2.default, { color: _colors.white, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }));
};

exports.default = function () {
  return _react2.default.createElement(HeaderWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), _react2.default.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), _react2.default.createElement(Profile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTWVudUljb24iLCJQZXJzb25JY29uIiwid2hpdGUiLCJMdWRvTG9nb1NyYyIsIkhlYWRlcldyYXBwZXIiLCJkaXYiLCJJY29uV3JhcHBlciIsIkxvZ29XcmFwcGVyIiwiZXh0ZW5kIiwiUHJvZmlsZVdyYXBwZXIiLCJMb2dvIiwiTWVudSIsIlByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7Ozs7Ozs7QUFFVCxJQUFNLGNBQU4sQUFBb0I7O0FBRXBCLElBQU0sZ0JBQWdCLDJCQUFoQixBQUF1QixJQUE3Qjs7QUFRQSxJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBTUEsSUFBTSxjQUFjLFlBQWQsQUFBMEIsT0FBaEM7O0FBU0EsSUFBTSxpQkFBaUIsWUFBakIsQUFBNkIsT0FBbkM7O0FBS0EsSUFBTSxPQUFPLFNBQVAsQUFBTyxPQUFBO3lCQUNWLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEseUNBQ08sS0FBTCxBQUFTLFFBQU8sS0FBaEIsQUFBcUI7Z0JBQXJCO2tCQUZTLEFBQ1gsQUFDRTtBQUFBOztBQUZKOztBQU1BLElBQU0sT0FBTyxTQUFQLEFBQU8sT0FBQTt5QkFDVixjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUQsQUFBVSxBQUFPO2dCQUFqQjtrQkFGUyxBQUNYLEFBQ0U7QUFBQTs7QUFGSjs7QUFNQSxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQUE7eUJBQ2IsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDLGtDQUFELEFBQVksQUFBTztnQkFBbkI7a0JBRlksQUFDZCxBQUNFO0FBQUE7O0FBRkosQUFNQTs7a0JBQWUsWUFBQTt5QkFDWixjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsb0NBQ0EsQUFBQzs7Z0JBQUQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOztnQkFBRDtrQkFKVyxBQUNiLEFBR0U7QUFBQTtBQUFBO0FBSkoiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2h1YW5nIHl1bmcgeXUvRGVza3RvcC9naXRodWIvc3NyLXJlZHV4In0=