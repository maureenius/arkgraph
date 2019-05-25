import React from 'preact';
import style from './style';
import cn from 'classnames';

const ArkCell = (props) => (
	<div
		class={
			cn(
				style.cell,
				style[props.header_level],
				{
					[style.header]: props.header,
					[style.fullwidth]: props.fullwidth,
					[style.halfwidth]: props.halfwidth,
				}
			)
		}
		style={props.style}
	>
		{
			props.content || props.children
		}
	</div>
);

export default ArkCell;
