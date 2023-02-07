type ModClasses = Record<string, boolean>

export const classNames = (mainClass:string, modClasses:ModClasses, addClasses:string[]):string => (
    [
        mainClass,
        ...addClasses,
        ...Object.entries(modClasses)
            .filter(([className, enabled]) => enabled)
            .map(([className, enabled]) => className)
    ]
        .join(' ')
);