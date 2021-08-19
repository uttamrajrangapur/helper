const { Schema, model } = require("mongoose");
const tableaSchema = {
  field1: String,
  field2: [{ type: Schema.Types.ObjectId, ref: "TableB"}]
}
const tablebSchema = {
  field1: String,
  field2: [{ type: Schema.Types.ObjectId, ref: "TableA"}]
}
export const tableA = model("TableA", tableaSchema);
export const tableB = model("TableB", tablebSchema);