import type { PlangsGraph } from '../entities/plangs_graph';

export function define(g: PlangsGraph): void {
    g.v_tsystem.set('tsys+oop', { name: 'Object-Oriented' });
    g.v_tsystem.set('tsys+duck', { name: 'Duck Typing' });
    g.v_tsystem.set('tsys+dynamic', { name: 'Dynamic Typing' });
    g.v_tsystem.set('tsys+strong', { name: 'Strong Typing' });
    g.v_tsystem.set('tsys+optional', { name: 'Optional Typing' });
}