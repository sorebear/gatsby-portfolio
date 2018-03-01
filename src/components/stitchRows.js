import React, { Component } from 'react';

class StitchRows extends Component {
	constructor(props) {
		super(props);
		this.topTransformOrigin = this.props.rotate > 0 ? '100% 50%' : '0% 50%';
      this.bottomTransformOrigin = this.props.rotate > 0 ? '0% 50%' : '100% 50%';
      this.triangleStyles = this.props.rotate > 0 ? {
         position: 'relative',
         borderStyle: 'solid',
         borderWidth: '100% 0 0 100%',
         borderColor: 'transparent transparent transparent white'
      } : {
         position: 'relative',
         borderStyle: 'solid',
         borderWidth: '100% 0 0 100%',
         borderColor: 'transparent transparent transparent white'
      }
		this.state = {
			sectionWidth: 1128
		};
	}

	componentDidMount() {
		console.log(document.getElementById('skills-title').offsetWidth);
	}

	render() {
		const { section, children, rotate, rows, set } = this.props;
		return (
			<div style={styles.horizontalLineContainer}>
				<div className='stitch-rows' style={{ position: 'relative'}}>
					<div
						className={`horizontal-line-mask ${section}__horizontal-line-mask ${section}__horizontal-line-mask--row-${
							rows[0]
						} ${section}__horizontal-line-mask--${set} `}
						style={{
							...styles.horiztonalLineMaskStyle,
							transform: `rotate(${rotate}deg)`,
                     transformOrigin: this.topTransformOrigin,
                     bottom: 0
						}}
					>
						<div className="horizontal-line" />
					</div>
				</div>
				{children}
				<div className='stitch-rows' style={{ position: 'relative'}}>
					<div
						className={`horizontal-line-mask ${section}__horizontal-line-mask ${section}__horizontal-line-mask--row-${
							rows[1]
						} ${section}__horizontal-line-mask--${set} `}
						style={{
							...styles.horiztonalLineMaskStyle,
							transform: `rotate(${rotate}deg)`,
							transformOrigin: this.bottomTransformOrigin
						}}
					>
						<div className="horizontal-line" />
					</div>
				</div>
			</div>
		);
	}
}

export default StitchRows;

const styles = {
	horizontalLineContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	horiztonalLineMaskStyle: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden'
	}
};
