import { PlangsGraph } from '../plangs_graph';

export function define(g: PlangsGraph): void {
    g.v_pl_tsys.set('pl-tsys+oop', { name: 'Object-Oriented' });
    g.v_pl_tsys.set('pl-tsys+duck', { name: 'Duck Typing' });
    g.v_pl_tsys.set('pl-tsys+dynamic', { name: 'Dynamic Typing' });
    g.v_pl_tsys.set('pl-tsys+strong', { name: 'Strong Typing' });
    g.v_pl_tsys.set('pl-tsys+optional', { name: 'Optional Typing' });
}