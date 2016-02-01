var React = require('react');
var ReactDOM = require('react-dom');

var Login = React.createClass({
	render: function(){
		return (
		<form className="login-form" action="index.html" method="post">
                <div className="form-title">
                    <span className="form-title">Welcome.</span>
                    <span className="form-subtitle">Please login.</span>
                </div>
                <div className="alert alert-danger display-hide">
                    <button className="close" data-close="alert"></button>
                    <span> Enter any username and password. </span>
                </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Username</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Password</label>
                    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
                <div className="form-actions">
                    <button type="submit" className="btn red btn-block uppercase">Login</button>
                </div>
                <div className="form-actions">
                    <div className="pull-left">
                        <label className="rememberme check">
                            <input type="checkbox" name="remember" value="1" />Remember me </label>
                    </div>
                    <div className="pull-right forget-password-block">
                        <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                    </div>
                </div>
                <div className="login-options">
                    <h4 className="pull-left">Or login with</h4>
                    <ul className="social-icons pull-right">
                        <li>
                            <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
                        </li>
                    </ul>
                </div>
                <div className="create-account">
                    <p>
                        <a href="javascript:;" className="btn-primary btn" id="register-btn">Create an account</a>
                    </p>
                </div>
            </form>

			);
	}
});

module.exports = Login;
