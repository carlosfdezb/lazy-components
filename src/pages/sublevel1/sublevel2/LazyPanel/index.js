import React from 'react';

const getModule = (module) => {
    return React.lazy(() => import(`components/${module}`))
}

export const LazyPanel = () => {

    const[Modulo, setModulo] = React.useState(null);

    const style = {'backgroundColor': 'White', 'color': 'black', 'borderRadius': '25px', 'padding': '10px', 'cursor': 'pointer'};

    return (
        <div>
            
                <div style={{'display': 'flex'}}>
                    <p style={{...style}} onClick={() => setModulo(getModule('ComponenteUno'))}>Componente 1</p>
                    <p style={{...style, 'marginLeft': '30px', 'marginRight': '30px'}} onClick={() => setModulo(getModule('ComponenteDos'))}>Componente 2</p>
                    <p style={{...style}} onClick={() => setModulo(getModule('ComponenteTres'))}>Componente 3</p>
                </div>
                <React.Suspense fallback={<div>Cargando...</div>}>
                {
                    Modulo && <Modulo />
                }
                </React.Suspense>
        </div>
    )
}
