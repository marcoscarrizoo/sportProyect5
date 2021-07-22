const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      orderState: {
        type: DataTypes.ENUM("cart", "processing", "cancelled", "completed"),
        defaultValue: "cart",
        allowNull: false,
      },
      shippingState: {
        type: DataTypes.ENUM(
          "not initialized",
          "initial", //appears as soon as payment is verified
          "created",
          "processing",
          "cancelled",
          "completed"
        ),
        defaultValue: "not initialized"
      },
      
      paymentState: {
        type: DataTypes.ENUM(
          "not initialized",
          "initial",
          "processing",
          "cancelled",
          "completed"
          ),
          defaultValue: "not initialized"
        },
        shippingAddress: {
          type: DataTypes.STRING,
         // defaultValue: "not initialized"
        },
        shippingZip: {
          type: DataTypes.INTEGER,
        },
        shippingLocated: {
          type: DataTypes.STRING,
        },
        shippingCity: {
          type: DataTypes.STRING,
        },
        payment_id: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          },
          payment_status: {
            type: DataTypes.STRING,
            defaultValue: "",
          },
          merchant_order_id:{
            type: DataTypes.BIGINT,
            defaultValue:0
          }
      },
      
      // shippingCost: {
      //   type: DataTypes.FLOAT,
      // },Elena nos comento que no era necesario
    //Me parece importante los campos de creado y actualizado. (Knut)
    //{ timestamps: false }
    // createdAT does not appear
    // updateAT does not appear
  );
};
