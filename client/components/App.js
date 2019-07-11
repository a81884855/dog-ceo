import React from 'react';
import axios from 'axios';
import Search from './Search';
import Labels from './Labels';
import Images from './Images';

export class App extends React.Component {
  constructor(){
    super()
    this.state={
      result: [],
      images: [],
      record: {},
    }
    this.filter = this.filter.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount(){
    axios.get('/api/breed')
      .then(function(source){
          let result = [];
          let data = source.data;
          for(let key in data){
            result.push(key)
            if(data[key].length>0){
              result.push(...data[key])
            }
          }
          return [data,result]
        }
      )
      .then((data) => this.setState({
        data: data[0],
        result: data[1],
      }))
  }

  filter(e){
    let { data } = this.state;
    let result = [];
    for(let key in data){
      if(key.includes(e.target.value)){
        result.push(key)
      }
      else if(data[key].length > 0){
        for(let subkey of data[key]){
          if(subkey.includes(e.target.value)){
            let name = key + "(" + subkey +")"
            result.push(name)
            break
          }
        }
      }
    }
    this.setState({
      result,
    })
  }

  search(e){
    let target = e.target.value
    const { result, record } = this.state;
    if(!this.state[target]){
    axios.get(`/api/image/${e.target.value}`)
      .then((data)=> 
        this.setState({
          images: data.data,
          result: [],
          [target]: data.data,
        })
      )
    }
    else{
      console.log("cache")
      this.setState({
        result: [],
        images: this.state[e.target.value]
      })
    }
  }

  render() {
    let { result, images } = this.state;
    return (
      <div className="mt-5">
        <Search filter={this.filter}/>
        <Labels result={result} search={this.search}/>
        {result.length > 1 ? null: <Images images={images}/>}
      </div>
    )
  }
}

export default App