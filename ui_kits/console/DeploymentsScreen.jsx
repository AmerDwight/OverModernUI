/* Console — Deployments screen */
function DeploymentsScreen() {
  const { Card, Icon, Badge, Button, Tabs, Avatar } = window.OverModernDesignSystem_22ac94;
  const [filter, setFilter] = React.useState("all");
  const rows = [
    { hash: "a3f9c1", branch: "main", msg: "Add edge cache invalidation", who: "Ada Mercer", env: "prod", dur: "42s", time: "2m ago", state: "live" },
    { hash: "7b2e08", branch: "main", msg: "Bump runtime to v4.2.0", who: "Marco Vidal", env: "prod", dur: "1m 04s", time: "1h ago", state: "live" },
    { hash: "c19df4", branch: "fix/billing", msg: "Refactor billing webhooks", who: "Lena Cho", env: "staging", dur: "38s", time: "3h ago", state: "failed" },
    { hash: "e84a55", branch: "main", msg: "Patch auth token rotation", who: "Ada Mercer", env: "prod", dur: "51s", time: "6h ago", state: "live" },
    { hash: "12bb90", branch: "exp/edge", msg: "Prototype regional failover", who: "Marco Vidal", env: "staging", dur: "1m 22s", time: "9h ago", state: "building" },
  ];
  const stateMap = { live: ["success", "Live"], failed: ["danger", "Failed"], building: ["accent", "Building"] };
  const shown = rows.filter((r) => filter === "all" || (filter === "prod" ? r.env === "prod" : r.env === "staging"));
  return (
    <div className="cx-content">
      <div className="cx-pagehead">
        <div>
          <h1>Deployments</h1>
          <p>Every build shipped across your environments.</p>
        </div>
        <div className="cx-pagehead__actions">
          <Button variant="secondary" iconLeft={<Icon name="git-branch" size={16} />}>Connect repo</Button>
          <Button variant="primary" iconLeft={<Icon name="rocket" size={16} />}>New deployment</Button>
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <Tabs value={filter} onChange={setFilter} tabs={[
          { value: "all", label: "All", count: rows.length },
          { value: "prod", label: "Production", count: rows.filter(r => r.env === "prod").length },
          { value: "staging", label: "Staging", count: rows.filter(r => r.env === "staging").length },
        ]} />
      </div>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        {shown.map((r, i) => (
          <div className="cx-deploy" key={r.hash} style={{ padding: "16px 20px", borderBottom: i === shown.length - 1 ? "none" : undefined }}>
            <Badge variant={stateMap[r.state][0]} dot>{stateMap[r.state][1]}</Badge>
            <div style={{ marginLeft: 4 }}>
              <div className="cx-deploy__msg">{r.msg}</div>
              <div className="cx-deploy__meta">
                <span className="cx-deploy__hash">{r.hash}</span> · {r.branch} · {r.env}
              </div>
            </div>
            <div className="cx-deploy__right">
              <span className="cx-deploy__time"><Icon name="timer" size={12} style={{ verticalAlign: "-2px", marginRight: 4, color: "var(--text-disabled)" }} />{r.dur}</span>
              <Avatar name={r.who} size="sm" />
              <span className="cx-deploy__time">{r.time}</span>
              <Icon name="ellipsis" size={18} style={{ color: "var(--text-tertiary)", cursor: "pointer" }} />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
window.DeploymentsScreen = DeploymentsScreen;
