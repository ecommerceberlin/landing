


export function mapContextToSlackWebhook(context: string): string {

    if(context.startsWith('premium.') || context.startsWith('exhibitor.')){
        return "offer"
    }

    return "dev" 

}
