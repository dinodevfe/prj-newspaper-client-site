'use client'
import React, { Component } from 'react'
import { Box, Stack, Typography, styled } from '@mui/material'

export default class CardWelcome extends Component {
  render() {
    return (
      <Wrapper>
        <Stack>
          <Typography variant='h5'>Chào mừng bạn đến với trang tin tức tổng hợp</Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a faucibus ipsum. Ut convallis risus venenatis tortor
            dignissim pulvinar. Vivamus pretium, diam nec interdum blandit, turpis elit volutpat dolor, at egestas diam mauris
            mattis arcu. Mauris elit est, facilisis non ullamcorper convallis, facilisis eu tellus. Sed gravida iaculis ante ut
            commodo.
          </Typography>
        </Stack>
      </Wrapper>
    )
  }
}

const Wrapper = styled(Box)({
  width: '100%',
  paddingBottom: 'calc(50% - 8px)',
  position: 'relative',
  '& > div': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '18px 24px',
    gap: '9px',
    borderRadius: '6px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px'
  }
})
