import type { PlangsGraph } from "../entities/plangs_graph";

export function define(g: PlangsGraph): void {
    g.v_platform.merge('platf+linux64', { name: 'Linux 64' });
    g.v_platform.merge('platf+mac64', { name: 'MacOS 64' });
    g.v_platform.merge('platf+windows10', { name: 'Windows 10' });
    g.v_platform.merge('platf+wasi32', { name: 'WASM/WASI 32' });
    g.v_platform.merge('platf+freebsd64', { name: 'FreeBSD 64' });
    g.v_platform.merge('platf+ios', { name: 'iOS' });
    g.v_platform.merge('platf+rpi', { name: 'Raspberry Pi' });
    g.v_platform.merge('platf+android', { name: 'Android' });
}