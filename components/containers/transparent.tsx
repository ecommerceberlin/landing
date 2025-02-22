

export function Transparent({ children }: { children: React.ReactNode }) {
    return (
        <div className="my-20 w-full flex flex-col gap-16 items-center">
            {children}
        </div>
    )
}