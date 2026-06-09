export type CustomObserverType = {
    rootMargin: string
    threshold: number | number[]
    trueFunction?: () => any
    falseFunction?: () => any
}

export default function CustomObserver({ rootMargin, threshold, trueFunction, falseFunction }: CustomObserverType): IntersectionObserver {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (trueFunction) trueFunction()
            } else {
                if (falseFunction) falseFunction()
            }
        })
    }, {
        rootMargin: rootMargin,
        threshold: threshold
    })

    return observer
}