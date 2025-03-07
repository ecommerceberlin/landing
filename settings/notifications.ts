


export function mapContextToSlackWebhook(context: string): string {

    if(context.startsWith('premium.')){
        return "offer"
    }

    if(context === 'exhibitor.book-a-call' || context === 'premium.book-a-call'){
        return "offer"
    }

    return "dev" 

}
