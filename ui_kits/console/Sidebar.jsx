/* Console — Sidebar (UI kit screen; loaded via Babel, no imports) */
function Sidebar({ active, onNav }) {
  const { Icon, Avatar, Badge } = window.OverModernDesignSystem_22ac94;
  const main = [
    { id: "overview", icon: "layout-dashboard", label: "Overview" },
    { id: "deployments", icon: "rocket", label: "Deployments", count: "12" },
    { id: "observability", icon: "activity", label: "Observability" },
    { id: "databases", icon: "database", label: "Databases" },
    { id: "edge", icon: "globe", label: "Edge network" },
  ];
  const sys = [
    { id: "members", icon: "users", label: "Members" },
    { id: "settings", icon: "settings", label: "Settings" },
  ];
  const Item = (it) => (
    <div
      key={it.id}
      className={"cx-nav" + (active === it.id ? " cx-nav--active" : "")}
      onClick={() => onNav && onNav(it.id)}
    >
      <Icon name={it.icon} size={18} />
      <span>{it.label}</span>
      {it.count && <span className="cx-nav__count">{it.count}</span>}
    </div>
  );
  return (
    <aside className="cx-side">
      <div className="cx-side__brand">
        <img src="../../assets/logo-wordmark.svg" alt="OverModern" />
      </div>
      <div className="cx-ws">
        <Avatar name="Northwind Labs" accent size="sm" />
        <div style={{ lineHeight: 1.25 }}>
          <div className="cx-ws__name">Northwind Labs</div>
          <div className="cx-ws__plan">ENTERPRISE</div>
        </div>
        <Icon name="chevrons-up-down" size={15} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
      </div>
      <div className="cx-navlabel">Platform</div>
      {main.map(Item)}
      <div className="cx-navlabel">Organization</div>
      {sys.map(Item)}
      <div className="cx-side__foot">
        <Avatar name="Ada Mercer" status="online" size="md" />
        <div style={{ lineHeight: 1.3 }}>
          <div className="nm">Ada Mercer</div>
          <div className="em">ada@northwind.io</div>
        </div>
        <Icon name="log-out" size={16} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
