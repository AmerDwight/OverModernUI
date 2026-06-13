/* Console — Overview screen */
function AreaChart() {
  // simple deterministic area chart (data viz, not iconography)
  const pts = [38, 42, 35, 50, 46, 58, 54, 66, 60, 72, 68, 82, 78, 90];
  const W = 640, H = 188, max = 100;
  const step = W / (pts.length - 1);
  const coords = pts.map((v, i) => [i * step, H - (v / max) * H]);
  const line = coords.map((c, i) => (i ? "L" : "M") + c[0].toFixed(1) + " " + c[1].toFixed(1)).join(" ");
  const area = line + ` L ${W} ${H} L 0 ${H} Z`;
  return (
    <div className="cx-chart">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="cxArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgb(61 130 255 / 0.35)" />
            <stop offset="1" stopColor="rgb(61 130 255 / 0)" />
          </linearGradient>
          <linearGradient id="cxStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3D82FF" />
            <stop offset="1" stopColor="#44DEE6" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="rgb(255 255 255 / 0.05)" strokeWidth="1" />
        ))}
        <path d={area} fill="url(#cxArea)" />
        <path d={line} fill="none" stroke="url(#cxStroke)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="4" fill="#44DEE6" />
      </svg>
      <div className="cx-chart__axis">
        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>now</span>
      </div>
    </div>
  );
}

function OverviewScreen() {
  const { Card, Icon, Badge, Button } = window.OverModernDesignSystem_22ac94;
  const stats = [
    { icon: "arrow-up-right", label: "Requests", value: "1.24M", unit: "/min", delta: "+12.4%", up: true },
    { icon: "timer", label: "p99 latency", value: "12.4", unit: "ms", delta: "−3.1%", up: true },
    { icon: "triangle-alert", label: "Error rate", value: "0.02", unit: "%", delta: "+0.01%", up: false },
    { icon: "server", label: "Active nodes", value: "48", unit: "/ 50", delta: "stable", up: true },
  ];
  const regions = [
    { name: "us-east-1", v: 92 }, { name: "eu-west-2", v: 74 },
    { name: "ap-south-1", v: 58 }, { name: "sa-east-1", v: 31 },
  ];
  const deploys = [
    { hash: "a3f9c1", msg: "Add edge cache invalidation", who: "ada", time: "2m ago", state: "success" },
    { hash: "7b2e08", msg: "Bump runtime to v4.2.0", who: "marco", time: "1h ago", state: "success" },
    { hash: "c19df4", msg: "Refactor billing webhooks", who: "lena", time: "3h ago", state: "warning" },
    { hash: "e84a55", msg: "Patch auth token rotation", who: "ada", time: "6h ago", state: "success" },
  ];
  return (
    <div className="cx-content">
      <div className="cx-pagehead">
        <div>
          <h1>Overview</h1>
          <p>Real-time health across all production regions.</p>
        </div>
        <div className="cx-pagehead__actions">
          <Button variant="secondary" iconLeft={<Icon name="download" size={16} />}>Export</Button>
          <Button variant="primary" iconLeft={<Icon name="rocket" size={16} />}>Deploy</Button>
        </div>
      </div>

      <div className="cx-stats">
        {stats.map((s) => (
          <Card key={s.label}>
            <div className="cx-stat__label"><Icon name={s.icon} size={14} />{s.label}</div>
            <div className="cx-stat__value">{s.value}<small> {s.unit}</small></div>
            <div className={"cx-stat__delta " + (s.up ? "cx-up" : "cx-down")}>
              <Icon name={s.up ? "trending-up" : "trending-down"} size={13} />{s.delta}
            </div>
          </Card>
        ))}
      </div>

      <div className="cx-row2">
        <Card variant="glass">
          <div className="cx-panel-title">
            <h3>Request throughput</h3>
            <Badge variant="accent" dot>Live</Badge>
          </div>
          <AreaChart />
        </Card>
        <Card>
          <div className="cx-panel-title"><h3>Traffic by region</h3></div>
          {regions.map((r) => (
            <div className="cx-region" key={r.name}>
              <span className="cx-region__name">{r.name}</span>
              <span className="cx-region__bar"><span className="cx-region__fill" style={{ width: r.v + "%" }} /></span>
              <span className="cx-region__val">{r.v}%</span>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <div className="cx-panel-title">
          <h3>Recent deployments</h3>
          <Button variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={15} />}>View all</Button>
        </div>
        {deploys.map((d) => (
          <div className="cx-deploy" key={d.hash}>
            <Icon name="git-commit-horizontal" size={18} style={{ color: "var(--text-tertiary)" }} />
            <div>
              <div className="cx-deploy__msg">{d.msg}</div>
              <div className="cx-deploy__meta">
                <span className="cx-deploy__hash">{d.hash}</span> · pushed by {d.who}
              </div>
            </div>
            <div className="cx-deploy__right">
              <Badge variant={d.state === "warning" ? "warning" : "success"} dot>
                {d.state === "warning" ? "Rolled back" : "Deployed"}
              </Badge>
              <span className="cx-deploy__time">{d.time}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
window.OverviewScreen = OverviewScreen;
