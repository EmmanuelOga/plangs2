import { PlangsGraph } from '../../plangs_graph';

export const pythonVId = 'pl+python';

export function define(g: PlangsGraph) {
    g.v_pl.set(pythonVId, {
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

    g.e_people.set({ from: 'person+guido', to: pythonVId }, { role: 'designer' });

    const types: `pl-tsys+${string}`[] = [
        'pl-tsys+oop', 'pl-tsys+duck', 'pl-tsys+dynamic', 'pl-tsys+strong', 'pl-tsys+optional'
    ];

    for (const ts of types) {
        g.e_pl_tsys.connect({ from: pythonVId, to: ts });
    }

    const platforms: `platf+${string}`[] = [
        'platf+linux64', 'platf+mac64', 'platf+windows10', 'platf+wasi32',
        'platf+freebsd64', 'platf+ios', 'platf+rpi', 'platf+android'
    ]

    for (const pf of platforms) {
        g.e_pl_platf.connect({ from: pythonVId, to: pf });
    }

    g.v_pl_impl.set('pl-impl+cpython', { name: 'CPython' });
}
