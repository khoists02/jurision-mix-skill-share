import Colors from '../constants/Colors';

export const Size = {
  XS: 5,
  SM: 10,
  MD: 20,
  LG: 30,
  XL: 40,
  SITE: 15
}

export const FontSize = {
  fontH1: {
    fontSize: 20
  },
  fontH2: {
    fontSize: 18
  },
  fontH3: {
    fontSize: 16
  },
  fontH4: {
    fontSize: 14
  },
  fontHSizeH5: {
    fontSize: 13
  },
  fontH6: {
    fontSize: 11
  },
};

export const FlexBox = {
  flexSpaceBetween: {
    justifyContent: 'space-between'
  },
  flexSpaceAround: {
    justifyContent: 'space-around'
  },
  flexAlignCenter: {
    alignItems: 'center'
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexBox: {
    display: 'flex'
  },
  directionRow: {
    flexDirection: 'row'
  },
}


export const Border = {
  ALL: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  NONE: {
    borderWidth: 0
  }
}

export const PaddingSize = {
  sitePadding: {
    padding: Size.SITE
  },
  SM: {
    padding: Size.SM
  },
  MD: {
    padding: Size.MD
  },
  XS: {
    padding: Size.XS,
  },
  LG: {
    padding: Size.LG
  },
  XL: {
    padding: Size.XL
  },
  // NONE
  NONE: {
    padding: 0
  },
  TOP_NONE: {
    paddingTop: 0
  },
  BOTTOM_NONE: {
    paddingTop: 0
  },
  LEFT_NONE: {
    paddingTop: 0
  },
  RIGHT_NONE: {
    paddingTop: 0
  },
  // SM SIZE
  TOP_SM: {
    paddingTop: Size.SM
  },
  BOTTOM_SM: {
    paddingBottom: Size.SM
  },
  LEFT_SM: {
    paddingLeft: Size.SM
  },
  RIGHT_SM: {
    paddingRight: Size.SM
  },
  // MD SIZE
  TOP_MD: {
    paddingTop: Size.MD
  },
  BOTTOM_MD: {
    paddingBottom: Size.MD
  },
  LEFT_MD: {
    paddingLeft: Size.MD
  },
  RIGHT_MD: {
    paddingRight: Size.MD
  },
  // XS SIZE
  TOP_XS: {
    paddingTop: Size.XS
  },
  BOTTOM_XS: {
    paddingBottom: Size.XS
  },
  LEFT_XS: {
    paddingLeft: Size.XS
  },
  RIGHT_XS: {
    paddingRight: Size.XS
  },
  // LG SIZE
  TOP_LG: {
    paddingTop: Size.LG
  },
  BOTTOM_LG: {
    paddingBottom: Size.LG
  },
  LEFT_LG: {
    paddingLeft: Size.LG
  },
  RIGHT_LG: {
    paddingRight: Size.LG
  },
  // XL SIZE
  TOP_XL: {
    paddingTop: Size.XL
  },
  BOTTOM_XL: {
    paddingBottom: Size.XL
  },
  LEFT_XL: {
    paddingLeft: Size.XL
  },
  RIGHT_XL: {
    paddingRight: Size.XL
  },
};

export const MarginSize = {
  sitePadding: {
    margin: Size.SITE
  },
  SM: {
    margin: Size.SM
  },
  MD: {
    margin: Size.MD
  },
  XS: {
    margin: Size.XS,
  },
  LG: {
    margin: Size.LG
  },
  XL: {
    margin: Size.XL
  },
  // NONE
  NONE: {
    margin: 0
  },
  TOP_NONE: {
    marginTop: 0
  },
  BOTTOM_NONE: {
    marginTop: 0
  },
  LEFT_NONE: {
    marginTop: 0
  },
  RIGHT_NONE: {
    marginTop: 0
  },
  // SM SIZE
  TOP_SM: {
    marginTop: Size.SM
  },
  BOTTOM_SM: {
    marginBottom: Size.SM
  },
  LEFT_SM: {
    marginLeft: Size.SM
  },
  RIGHT_SM: {
    marginRight: Size.SM
  },
  // MD SIZE
  TOP_MD: {
    marginTop: Size.MD
  },
  BOTTOM_MD: {
    marginBottom: Size.MD
  },
  LEFT_MD: {
    marginLeft: Size.MD
  },
  RIGHT_MD: {
    marginRight: Size.MD
  },
  // XS SIZE
  TOP_XS: {
    marginTop: Size.XS
  },
  BOTTOM_XS: {
    marginBottom: Size.XS
  },
  LEFT_XS: {
    marginLeft: Size.XS
  },
  RIGHT_XS: {
    marginRight: Size.XS
  },
  // LG SIZE
  TOP_LG: {
    marginTop: Size.LG
  },
  BOTTOM_LG: {
    marginBottom: Size.LG
  },
  LEFT_LG: {
    marginLeft: Size.LG
  },
  RIGHT_LG: {
    marginRight: Size.LG
  },
  // XL SIZE
  TOP_XL: {
    marginTop: Size.XL
  },
  BOTTOM_XL: {
    marginBottom: Size.XL
  },
  LEFT_XL: {
    marginLeft: Size.XL
  },
  RIGHT_XL: {
    marginRight: Size.XL
  },
};

export const BOX_SHADOW_STYPE = {
  shadowColor: 'black',
  elevation: 8,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.26,
  shadowRadius: 6,
};