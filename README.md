# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript related to type coercion.  The `add` function is declared to take two numbers as arguments but due to TypeScript's type coercion, it will compile even if a string is passed as argument. This will result in a runtime error. The solution shows how to improve the type safety using type guards.