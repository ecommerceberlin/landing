

export default async function Exhibitors({params}: {params: {id: string}}) {

    const id = (await params).id

    return <div>Exhibitor {id}</div>
}