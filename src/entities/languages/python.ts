import type { PlangsGraph } from '../../plangs_graph';

export const v_py = 'pl+python';

export function define(g: PlangsGraph) {
    g.v_pl.set(v_py, {
        name: 'Python',
        releases: [
            { version: '3.12.4', date: '2024-06-06', tags: ['stable'] },
        ],
    });

    g.v_person.set('person+guido', { name: 'Guido van Rossum' });
    g.e_people.set({ from: 'person+guido', to: v_py }, { role: 'designer' });

    for (const tsys of ['oop', 'duck', 'dynamic', 'strong', 'optional']) {
        g.e_pl_tsys.connect({ from: v_py, to: `tsys+${tsys}` });
    }

    for (const pf of ['linux64', 'mac64', 'windows10', 'wasi32', 'freebsd64', 'ios', 'rpi', 'android']) {
        g.e_pl_platf.connect({ from: v_py, to: `platf+${pf}` });
    }

    // Implementations.
    for (const [p, name] of [
        ['cpython', 'CPython'],
        ['py-py', 'PyPy'],
        ['stackless-py', 'Stackless Python'],
        ['micro-py', 'MicroPython'],
        ['circuit-py', 'CircuitPython'],
        ['iron-py', 'IronPython'],
        ['jython', 'Jython']
    ]) {
        g.v_impl.merge(`impl+${p}`, { name });
        g.e_implements.connect({ from: `impl+${p}`, to: v_py, d: true, });
    }

    // Influeced by:
    for (const [p, name] of [
        ['abc', 'ABC'],
        ['ada', 'Ada'],
        ['algol', 'ALGOL'],
        ['apl', 'APL'],
        ['c', 'C'],
        ['cpp', 'C++'],
        ['clu', 'CLU'],
        ['dylan', 'Dylan'],
        ['haskell', 'Haskell'],
        ['icon', 'Icon'],
        ['lisp', 'Lisp'],
        ['modula3', 'Modula-3'],
        ['perl', 'Perl'],
        ['sml', 'Standard ML']
    ]) {
        g.v_pl.merge(`pl+${p}`, { name });
        g.e_influenced.connect({ from: `pl+${p}`, to: v_py, d: true, });
    }

    // Influenced:
    for (const [p, name] of [
        ['groovy', 'Groovy'],
        ['boo', 'Boo'],
        ['cobra', 'Cobra'],
        ['coffee', 'CoffeeScript'],
        ['d', 'D'],
        ['fsharp', 'F#'],
        ['gdscript', 'GDScript'],
        ['genie', 'Genie'],
        ['go', 'Go'],
        ['js', 'JavaScript'],
        ['julia', 'Julia'],
        ['mojo', 'Mojo'],
        ['nim', 'Nim'],
        ['ring', 'Ring'],
        ['ruby', 'Ruby'],
        ['swift', 'Swift']
    ]) {
        g.v_pl.merge(`pl+${p}`, { name });
        g.e_influenced.connect({ from: v_py, to: `pl+${p}`, d: true, });
    }
}