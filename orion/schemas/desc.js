/**
 * Created by lam on 01/11/2015.
 */
Descriptions.attachSchema(new SimpleSchema({
    popular:{
        type:String,
        label:"Popular",
        optional:true,
        autoform: {
            type:'textarea',
        }
    },
    recent:{
        type:String,
        label:"Recent",
        optional:true,
        autoform: {
            type:'textarea',
        }
    },
    cartsdesc:{
        type:String,
        label:"Cart Desc",
        optional:true,
        autoform: {
            type:'textarea',
        }
    }
}));
