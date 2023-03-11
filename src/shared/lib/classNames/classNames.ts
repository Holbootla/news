export type ModClasses = Record<string, boolean | undefined>

export const classNames = (mainClass:string | undefined, modClasses:ModClasses, addClasses:Array<string | undefined>):string => (
    [
        mainClass,
        ...addClasses,
        ...Object.entries(modClasses)
            .filter(([_, enabled]) => enabled)
            .map(([className]) => className),
    ]
        .join(' ')
);
