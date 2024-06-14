import { PlangsGraph } from '../../plangs_graph';

export const v_py = 'pl+python';

export function define(g: PlangsGraph) {
    g.v_pl.set(v_py, {
        name: 'Python',
        urls: [
            { kind: 'homepage', url: 'https://www.python.org/' },
            { kind: 'repository', url: 'https://github.com/python/cpython' },
            { kind: 'releases', url: 'https://www.python.org/downloads/' },
            { kind: 'apidocs', url: 'https://docs.python.org/3' },
            { kind: 'other', url: 'https://en.wikipedia.org/wiki/Python_(programming_language)' }
        ],
        firstAppeared: '1991-02-20',
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

    for (const [p, name] of [
        ['cpython', 'CPython'],
        ['py-py', 'PyPy'],
        ['stackless-py', 'Stackless Python'],
        ['micro-py', 'MicroPython'],
        ['circuit-py', 'CircuitPython'],
        ['iron-py', 'IronPython'],
        ['jython', 'Jython']
    ]) g.defImpl(`impl+${p}`, name, v_py);
}