Object.defineProperty(exports, '__esModule', { value: true });

var Router = require('next/router');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

function SecretRedirect(props) {
    react.useEffect(function () {
        Router__default["default"].push(props, props.pathname);
    }, []);
    return null;
}

exports["default"] = SecretRedirect;
//# sourceMappingURL=index.js.map
