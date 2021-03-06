import React, { Component } from 'react';
import { Text, ToastAndroid, View, Slider, Image, TouchableOpacity } from 'react-native';
import styles from './DefineWorkerRewardCirclesComponentStyle';
import Navigator from '../../../../../util/Navigator';
import RewardsCircleComponent from '../../../../../views/rewardscircle/RewardsCircleComponent';

export default class DefineWorkerRewardCirclesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfRewardLevels: 5,
      minNumberOfRewardCycles: 5,
      maxNumberOfRewardCycles: 50,
      numberOfRewardSteps: 5,
      levelDistributionFactor: 0,

      numberOfRewardLevelsDisplay: 5,
      minNumberOfRewardCyclesDisplay: 5,
      maxNumberOfRewardCyclesDisplay: 50,
      numberOfRewardStepsDisplay: 5
    }
  }

  onClickOfNextButton() {
    Navigator.init(this).pushDefineWorkerRewardLevelsPage({
          numberOfRewardLevels: this.state.numberOfRewardLevels,
          minNumberOfRewardCycles: this.state.minNumberOfRewardCycles,
          maxNumberOfRewardCycles: this.state.maxNumberOfRewardCycles,
          numberOfRewardSteps: this.state.numberOfRewardSteps,
          levelDistributionFactor: this.state.levelDistributionFactor
        });
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={[styles.sliderContainer, {marginTop: 24}]}>
          <Text style={styles.sliderLabelText}>reward levels: {this.state.numberOfRewardLevelsDisplay}</Text>
          <Slider
            style={{width: '100%'}}
            step={1}
            minimumTrackTintColor='#005143'
            thumbTintColor='#005143'
            maximumTrackTintColor='#005143'
            value={this.state.numberOfRewardLevels}
            onValueChange={value => this.setState({numberOfRewardLevelsDisplay: value})}
            onSlidingComplete={value => this.setState({numberOfRewardLevels: value})}
            minimumValue={1}
            maximumValue={10}/>
        </View>

        <View style={styles.sliderContainer}>

          {this.state.levelDistributionFactor === 0 &&
          <View style={{width: '100%'}}>

            <Text style={styles.sliderLabelText}>number of rewards per
              level: {this.state.minNumberOfRewardCyclesDisplay}</Text>
            <Slider
            style={{width: '100%'}}
            minimumTrackTintColor='#005143'
            thumbTintColor='#005143'
            maximumTrackTintColor='#005143'
            step={1}
            value={this.state.minNumberOfRewardCycles}
            onValueChange={value => this.setState({minNumberOfRewardCyclesDisplay: value})}
            onSlidingComplete={value => this.setState({minNumberOfRewardCycles: value})}
            minimumValue={1}
            maximumValue={10}/>

          </View>
          }
          {this.state.levelDistributionFactor > 0 &&
          <View style={{width: '100%', flexDirection: 'row'}}>

            <View style={{width: '50%'}}>

              <Text style={styles.sliderLabelText}>min rewards per
                level: {this.state.minNumberOfRewardCyclesDisplay}</Text>

              <Slider
                style={{width: '100%'}}
                minimumTrackTintColor='#005143'
                thumbTintColor='#005143'
                maximumTrackTintColor='#005143'
                step={1}
                value={this.state.minNumberOfRewardCycles}
                onValueChange={value => this.setState({minNumberOfRewardCyclesDisplay: value})}
                onSlidingComplete={value => this.setState({minNumberOfRewardCycles: value})}
                minimumValue={1}
                maximumValue={10}/>
            </View>

            <View style={{width: '50%'}}>

              <Text style={styles.sliderLabelText}>max rewards per
                level: {this.state.maxNumberOfRewardCyclesDisplay}</Text>

              <Slider
                style={{width: '100%'}}
                minimumTrackTintColor='#005143'
                thumbTintColor='#005143'
                maximumTrackTintColor='#005143'
                step={1}
                value={this.state.maxNumberOfRewardCycles}
                onValueChange={value => this.setState({maxNumberOfRewardCyclesDisplay: value})}
                onSlidingComplete={value => this.setState({maxNumberOfRewardCycles: value})}
                minimumValue={10}
                maximumValue={50}/>
            </View>
          </View>
          }
        </View>


        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabelText}>steps for reward: {this.state.numberOfRewardStepsDisplay}</Text>
          <Slider
            style={{width: '100%'}}
            minimumTrackTintColor='#005143'
            thumbTintColor='#005143'
            maximumTrackTintColor='#005143'
            step={1}
            value={this.state.numberOfRewardSteps}
            onValueChange={value => this.setState({numberOfRewardStepsDisplay: value})}
            onSlidingComplete={value => this.setState({numberOfRewardSteps: value})}
            minimumValue={1}
            maximumValue={10}/>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabelText}>level distribution</Text>
          <Slider
            style={{width: '100%'}}
            minimumTrackTintColor='#005143'
            thumbTintColor='#005143'
            maximumTrackTintColor='#005143'
            value={this.state.levelDistributionFactor}
            onSlidingComplete={value => this.setState({levelDistributionFactor: value})}
            minimumValue={0}
            maximumValue={1}/>
        </View>

        <View style={{flexDirection: 'row', width: '85%', marginTop: -2}}>
          <Text style={{fontFamily: 'WorkSans-Regular', color: '#002A1C', fontSize: 8}}>linear</Text>
          <View style={{flex: 1}}/>
          <Text style={{fontFamily: 'WorkSans-Regular', color: '#002A1C', fontSize: 8}}>exponential</Text>
        </View>

        <RewardsCircleComponent
          style={{width: 250, height: 250, alignItems: 'center'}}
          numberOfRewardSteps={this.state.numberOfRewardSteps}
          minNumberOfRewardCycles={this.state.minNumberOfRewardCycles}
          maxNumberOfRewardCycles={this.state.maxNumberOfRewardCycles}
          numberOfRewardLevels={this.state.numberOfRewardLevels}
          rewardStep={this.state.numberOfRewardSteps}
          rewardCycle={this.state.numberOfRewardCycles}
          rewardLevel={this.state.numberOfRewardLevels}
          levelDistributionFactor={this.state.levelDistributionFactor}/>

        <View style={{flex: 1}}/>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onClickOfNextButton.bind(this)}>
          <Text style={styles.button}>next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
