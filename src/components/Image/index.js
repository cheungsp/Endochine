import React, {Component} from 'react';
import Wallpaper from '../../image/wallpaper.jpg';

export default class Image extends Component {
  // <img className="background-pic" src={`img/wallpaper.jpg`} />
  render() {
//     const HeaderImage = styled.div`
//   background-image: url(${myImage});
// `;
    let {mode, src, height, width, style, ...props} = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || 500,
      width: width || 500,
      backgroundColor: 'gray'
    };

    let important = {
      // backgroundImage: `url("${src}")`,
      backgroundImage: `url(${Wallpaper})`,
      // backgroundSize: size,
      resizeMode: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    };

    return <div {...props} style={{...defaults, ...style, ...important}} />
  }
}
