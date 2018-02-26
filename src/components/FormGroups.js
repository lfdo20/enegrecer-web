import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { ESTADOS } from '../constants';


export function TelefoneFormGroup({ handleChange, ...props }) {
  return (
    <div className="input-field col s6">
      <InputMask
        {...props}
        type="text"
        name={props.id}
        id={props.id}
        onChange={e => handleChange(e.target.value, 'telefone')}
        value={props.value}
        mask="(99) 99999-9999"
        maskChar=" "
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export function RacaFormGroup({ handleChange, ...rest }) {
  return (
    <SelectField
      {...rest}
      hintText="Escolha uma opção"
      floatingLabelText={'Cor ou Raca'}
      floatingLabelFixed
      fullWidth
      onChange={(_, $_, v) => handleChange(v, 'raca')}
    >
      <MenuItem value={'preta'} primaryText="Preta" />
      <MenuItem value={'parda'} primaryText="Parda" />
    </SelectField>
  )
}

export function RadioGrupoBotoes(props) {
  return (
    <div >
      { props.botoes.map(
        botaoRadio =>
          (<p key={botaoRadio.id}>
            <input name={props.id} type="radio" id={botaoRadio.id} />
            <label htmlFor={botaoRadio.id}>{botaoRadio.valor}</label>
          </p>
          )
      )
      }
    </div>
  )
}

RadioGrupoBotoes.propTypes = {
  id: PropTypes.string,
  botoes: PropTypes.arrayOf(PropTypes.object)
};

RadioGrupoBotoes.defaultProps = {
  id: '',
  botoes: []
};

export function CheckBox(props) {
  return (
    <p>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </p>
  );
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

CheckBox.defaultProps = {
  id: '',
  label: ''
}

export function EstadoFormGroup({ handleChange, ...rest }) {
  return (
    <div className="input-field col s12">
      <SelectField
        {...rest}
        hintText="Escolha uma opção"
        floatingLabelText="Estado"
        floatingLabelFixed
        fullWidth
        onChange={(_, __, v) => handleChange(v, 'estado')}
      >
        {
          ESTADOS.map(
            val => <MenuItem key={val} value={val} primaryText={val} />
          )
        }
      </SelectField>
    </div>
  )
}


export function Combobox(props) {
  return (
    <div className={props.divClasse}>
      <select id={props.id} onChange={props.onChange}>
        <option value="" >{props.valorPadrao}</option>
        {
          props.itens.map(
            val => <option key={val} value={val}> {val} </option>
          )
        }
      </select>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

Combobox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.string),
  valorPadrao: PropTypes.string
};

Combobox.defaultProps = {
  id: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  itens: [],
  valorPadrao: ''
};


export function CampoTexto(props) {
  return (
    <div className={props.divClasse}>
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        className={props.inputClasse}
        maxLength={props.maxLen}
        placeholder={props.placeholder ? props.placeholder : undefined}
      />
      <label className="active" htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

CampoTexto.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  maxLen: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  divClasse: PropTypes.string,
  inputClasse: PropTypes.string

};

CampoTexto.defaultProps = {
  id: '',
  type: '',
  maxLen: '',
  placeholder: '',
  label: '',
  onChange: () => {},
  divClasse: '',
  inputClasse: ''
};

const formGroupPropTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

EstadoFormGroup.propTypes = { ...formGroupPropTypes };

TelefoneFormGroup.propTypes = { ...formGroupPropTypes };

RacaFormGroup.propTypes = { ...formGroupPropTypes };
