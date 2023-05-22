import React from "react";
import { ReactDOM } from "react-dom";

function Example() {
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained"href={`/example`}>Exampleに遷移</Button>
            </Card>
        </div>
    );
}

export default Example;