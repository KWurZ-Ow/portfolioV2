import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(){
    return(
        <div className="loading">
            <CircularProgress />
            <h3>Loading...</h3>
        </div>
    )
}