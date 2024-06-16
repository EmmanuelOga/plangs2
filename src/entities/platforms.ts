import { PlangsGraph } from '../plangs_graph';

export function define(g: PlangsGraph): void {
    g.v_platform.set('platf+linux64', { name: 'Linux 64' });
    g.v_platform.set('platf+mac64', { name: 'MacOS 64' });
    g.v_platform.set('platf+windows10', { name: 'Windows 10' });
    g.v_platform.set('platf+wasi32', { name: 'WASM/WASI 32' });
    g.v_platform.set('platf+freebsd64', { name: 'FreeBSD 64' });
    g.v_platform.set('platf+ios', { name: 'iOS' });
    g.v_platform.set('platf+rpi', { name: 'Raspberry Pi' });
    g.v_platform.set('platf+android', { name: 'Android' });
}