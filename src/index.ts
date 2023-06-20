// Third party services
import express from "express"

// Helpers
import loadMiddlewareLibs from "./helpers/middleware"

const option = {
    helmet: true,
    compression: true,
}

// creates the init function
const init = async (app: express.Application, options = option) => {
    loadMiddlewareLibs(app, options);
}

export default init