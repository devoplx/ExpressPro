
import express from "express"
import loadMiddlewareLibs from "./helpers/middleware"


const init = async (app: express.Application, options: {helmet: boolean}) => {
    loadMiddlewareLibs(app, options);
}

export default init