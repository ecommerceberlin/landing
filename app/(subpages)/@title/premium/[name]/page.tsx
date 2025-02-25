export default async function PremiumTitle({params}: {params: {name: string}}) {
    const name = (await params).name
    return <h1>Premium xxx {name}</h1>
}