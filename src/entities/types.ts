import { PlangsGraph } from '../plangs_graph';

export function define(g: PlangsGraph): void {
    g.v_tsys.set('tsys+oop', { name: 'Object-Oriented' });
    g.v_tsys.set('tsys+duck', { name: 'Duck Typing' });
    g.v_tsys.set('tsys+dynamic', { name: 'Dynamic Typing' });
    g.v_tsys.set('tsys+strong', { name: 'Strong Typing' });
    g.v_tsys.set('tsys+optional', { name: 'Optional Typing' });
}