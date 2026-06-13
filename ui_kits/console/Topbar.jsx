/* Console — Topbar */
function Topbar({ crumb, env, onEnv, theme, onTheme }) {
  const { Input, IconButton, Icon, Tabs } = window.OverModernDesignSystem_22ac94;
  return (
    <header className="cx-top">
      <div className="cx-top__crumb">northwind&nbsp;/&nbsp;<b>{crumb}</b></div>
      <div className="cx-search">
        <Input placeholder="Search resources, deploys, logs…" iconLeft={<Icon name="search" size={16} className="lead" />} />
      </div>
      <div className="cx-top__right">
        <Tabs
          tabs={[{ value: "prod", label: "Prod" }, { value: "staging", label: "Staging" }]}
          value={env}
          onChange={onEnv}
        />
        <IconButton icon="bell" variant="solid" label="Notifications" />
        <IconButton icon={theme === "light" ? "moon" : "sun"} variant="solid" label="Toggle theme" onClick={onTheme} />
        <IconButton icon="life-buoy" variant="solid" label="Help" />
      </div>
    </header>
  );
}
window.Topbar = Topbar;
