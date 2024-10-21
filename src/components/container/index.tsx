
import {ReactNode} from 'react' 


export function Container({children}: {children: ReactNode}) {
    return(
        <div className="container mt-5 p-5 mx-auto px-4 rounded-md max-w-7xl" style={{ backgroundColor: '#fefafa' }}>
            {children}
        </div>
    )
}