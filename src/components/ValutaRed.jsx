import React from 'react'

export default function ValutaRed(props) {

    const srednji = (props.osnova) / (props.valuta.vrednost);

    return (
        <tr>
            <td>
                {props.valuta.oznaka}
            </td>
            <td>
                {srednji * 0.97}
            </td>
            <td>
                {srednji}
            </td>
            <td>
                {srednji * 1.04}
            </td>
        </tr>
    )
}
