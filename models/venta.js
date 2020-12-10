var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var VentasSchema = Schema({
    user:{ type: Schema.ObjectId, ref: 'user'},
    produco:{ type: Schema.ObjectId, ref: 'producto'},
    folio: String,
    cantidad: String,
    p_unitario: Integer,
    p_total: Integer,
    pago: String,
    cambio: String, 
    
});

module.exports = mongoose.model("Ventas", VentasSchema);