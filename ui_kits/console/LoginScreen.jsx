/* Console — Login screen */
function LoginScreen({ onLogin }) {
  const { Input, Button, Icon } = window.OverModernDesignSystem_22ac94;
  const submit = (e) => { e.preventDefault(); onLogin && onLogin(); };
  return (
    <div className="cx-login">
      <div className="cx-login__grid" />
      <div className="cx-login__aura" />
      <form className="cx-login__card" onSubmit={submit}>
        <div className="cx-login__brand">
          <img src="../../assets/logo-wordmark.svg" alt="OverModern" />
        </div>
        <h2>Welcome back</h2>
        <p className="sub">Sign in to your OverModern workspace.</p>
        <div className="cx-login__fields">
          <Input label="Work email" type="email" placeholder="ada@northwind.io" defaultValue="ada@northwind.io" iconLeft={<Icon name="mail" size={16} className="lead" />} />
          <Input label="Password" type="password" placeholder="••••••••••" defaultValue="supersecret" iconLeft={<Icon name="lock" size={16} className="lead" />} />
          <Button type="submit" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={17} />} style={{ width: "100%" }}>Sign in</Button>
        </div>
        <div className="cx-divider">or</div>
        <Button variant="secondary" iconLeft={<Icon name="key-round" size={16} />} style={{ width: "100%" }}>Continue with SSO</Button>
        <div className="cx-login__foot">Protected by hardware-key MFA</div>
      </form>
    </div>
  );
}
window.LoginScreen = LoginScreen;
