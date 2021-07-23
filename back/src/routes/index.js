const { Router } = require("express");
const router = Router();
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const userRoutes = require("./usersRoutes");
const locationRoutes = require("./locationRoutes");
const mercadoRoutes = require("./mercadopago");

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/orders", orderRoutes);
router.use("/user", userRoutes);
router.use("/location", locationRoutes);
router.use("/mercadopago", mercadoRoutes);

module.exports = router;
