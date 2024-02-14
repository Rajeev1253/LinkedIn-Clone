export const handle_error = (res, error) => {
    if (error.name === "CONFLICT") {
      return res.status(409).send({
        success: false,
        message: error.message,
      });
    }
    if (error.name === "BAD_REQUEST") {
        return res.status(404).send({
          success: false,
          message: error.message,
        });
      }
    if(error.name === "SERVER_ERROR"){
        return res.status(500).send({
            success: false,
            message: error.message,
          });

    }
    
  };