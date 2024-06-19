import type { PlangsGraph } from '../../entities/plangs_graph';

export const lang_vid = 'pl+python';

export function define(g: PlangsGraph) {
    const pl = g.v_plang.merge(lang_vid, { name: 'Python' });
    const plb = g.plangBuilder(pl);

    plb.addImage({ kind: 'logo', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' });

    plb.addWebsite({ kind: 'homepage', href: 'https://www.python.org/', title: 'Python.org' });

    plb.addExtensions([".py", ".pyc", ".pyd", ".pyo", ".pyw", ".pyz", ".pyx", ".pxd", ".pxi"]);

    plb.addScoping(['lexical', 'dynamic']);

    plb.addReference('influences', { kind: 'wikipedia', href: 'https://en.wikipedia.org/wiki/Python_(programming_language)', title: 'Python (programming language) - Wikipedia' });

    // People

    g.v_person.merge('person+guido', { name: 'Guido van Rossum' });
    g.e_person_plang_role.set('person+guido', lang_vid, { role: 'designer' });

    // Type Systems

    for (const tsys of ['oop', 'duck', 'dynamic', 'strong', 'optional']) {
        g.e_plang_tsys.connect(lang_vid, `tsys+${tsys}`);
    }

    // Supported Platforms

    for (const pf of ['linux64', 'mac64', 'windows10', 'wasi32', 'freebsd64', 'ios', 'rpi', 'android']) {
        g.e_supports_platf.connect(lang_vid, `platf+${pf}`);
    }

    // Implementations

    for (const [p, name] of [
        ['cpython', 'CPython'],
        ['py-py', 'PyPy'],
        ['stackless-py', 'Stackless Python'],
        ['micro-py', 'MicroPython'],
        ['circuit-py', 'CircuitPython'],
        ['iron-py', 'IronPython'],
        ['jython', 'Jython']
    ]) {
        g.v_plang.merge(`pl+${p}`, { name });
        g.e_implements.connect(`pl+${p}`, lang_vid);
    }

    // Influences

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
        g.v_plang.merge(`pl+${p}`, { name });
        g.e_l_influenced_l.connect(`pl+${p}`, lang_vid);
    }

    // Influenced

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
        g.v_plang.merge(`pl+${p}`, { name });
        g.e_l_influenced_l.connect(lang_vid, `pl+${p}`);
    }

    // Releases

    plb.addRelease({ version: '3.12.4', date: '2024-06-06', kind: 'stable' });
}