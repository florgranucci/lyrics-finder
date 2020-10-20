import React, { useState } from 'react'

const Form = ({setSearchLyrics}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, setError] = useState(false);

    const { artist, song } = search;

    //Funcion a cada input para leer su contenido
    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Consultar las APIs

    const searchInformation = e => {
      e.preventDefault();

      if(artist.trim() === '' || song.trim() === ''){
        setError(true);
        return;
      }

      setError(false);
      setSearchLyrics(search);
    }

    return( 
        <div className = 'bg-info'>
        { error ? <p className='alert alert-danger text-center p-2'>Please, fill all the inputs</p> : null}
    <div className = 'container'>
    <div className = 'row'>
    <form 
   onSubmit={searchInformation}
   className="col card text-white bg-transparent mb-5 pt-5 pb-2"
   >
    <fieldset>
     <legend className="text-center">Lyrics Finder</legend>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
             <label>Artist</label>
               <input
                type="text"
                className="form-control"
                name="artist"
                placeholder="Artist's name"
                onChange={updateState}
                value={artist}
                />
             </div>
        </div>
            <div className="col-md-6">
               <div className="form-group">
                  <label>Song</label>
                    <input
                    type="text"
                    className="form-control"
                    name="song"
                    placeholder="Search song"
                    onChange={updateState}
                    value={song}
                     />
                </div>
            </div>
         </div>
             <button 
                type="submit" 
                className="btn btn-primary float-right"
             >Search</button>
        </fieldset>
      </form>
    </div>
    </div>
    </div>
        );
}


export default Form;