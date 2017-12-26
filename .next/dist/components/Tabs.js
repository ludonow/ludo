'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\huang yung yu\\Desktop\\github\\ssr-redux\\components\\Tabs.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  color: white;\n'], ['\n  color: white;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n'], ['\n']);

var TabWrapper = _styledComponents2.default.div(_templateObject);

var TabsWrapper = _styledComponents2.default.div(_templateObject2);

var Tabs = function Tabs(_ref) {
  var tabTitles = _ref.tabTitles;
  return _react2.default.createElement(TabsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, tabTitles.map(function (tabTitle, index) {
    return _react2.default.createElement(TabWrapper, { key: 'tab-' + index, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, tabTitle);
  }));
};

Tabs.propTypes = {
  tabTitles: _propTypes2.default.PropTypes.arrayOf(_propTypes2.default.string).isRequired
};

exports.default = Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUYWJXcmFwcGVyIiwiZGl2IiwiVGFic1dyYXBwZXIiLCJUYWJzIiwidGFiVGl0bGVzIiwibWFwIiwidGFiVGl0bGUiLCJpbmRleCIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU0sYUFBYSwyQkFBYixBQUFvQixJQUExQjs7QUFJQSxJQUFNLGNBQWMsMkJBQWQsQUFBcUIsSUFBM0I7O0FBR0EsSUFBTSxPQUFPLFNBQVAsQUFBTyxXQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO3lCQUNiLGNBQUQ7O2dCQUFBO2tCQUFBLEFBRUk7QUFGSjtBQUFBLEdBQUEsWUFFSSxBQUFVLElBQUksVUFBQSxBQUFDLFVBQUQsQUFBVyxPQUFYOzJCQUNYLGNBQUQsY0FBWSxjQUFaLEFBQXdCO2tCQUF4QjtvQkFBQSxBQUNHO0FBREg7S0FBQSxFQURZLEFBQ1o7QUFKSyxBQUNYLEFBRUk7QUFITjs7QUFZQSxLQUFBLEFBQUs7YUFDUSxvQkFBQSxBQUFVLFVBQVYsQUFBb0IsUUFBUSxvQkFBNUIsQUFBc0MsUUFEbkQsQUFBaUIsQUFDMEMsQUFHM0Q7QUFKaUIsQUFDZjs7a0JBR0YsQUFBZSIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2h1YW5nIHl1bmcgeXUvRGVza3RvcC9naXRodWIvc3NyLXJlZHV4In0=