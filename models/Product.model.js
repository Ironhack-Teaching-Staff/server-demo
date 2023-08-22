const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "ProductName is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required."],
      },
      userId: {
        type: Schema.ObjectId,
        required: [true, "UserId is required."],
      },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
