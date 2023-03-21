import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Icon,
  IconSize,
  Tag,
} from "@blueprintjs/core";
import { formatCurrency } from "../utils";
import "./BusInformationDialog.css"

interface BusInformationDialogProps {
  bus_id: string;
  voltage: number;
  owner: string;
  latitude: number;
  longitude: number;
  bus_name: string;
  mw_energy: number;
  mw_capacity: number;
  allocated_cost: number;
  total_cost: number;
  number_constraints: number;
}

export const BusInformationDialog = (props: BusInformationDialogProps) => {
  const {
    bus_id,
    voltage,
    owner,
    latitude,
    longitude,
    bus_name,
    mw_energy,
    mw_capacity,
    allocated_cost,
    total_cost,
    number_constraints,
  } = props;

  const iconColor =
    mw_energy <= 20 ? "#FA999C" : mw_energy <= 100 ? "#FBB360" : "#72CA9B";

  const handleClose = () => {};

  return (
    <Dialog isOpen className="bus-dialog">
      <DialogBody>
        <div className="bus-dialog--header">
          <Icon
            icon="ring"
            size={IconSize.LARGE}
            color={iconColor}
            data-testid="bus-dialog-header-icon"
          />
          <div className="bus-dialog--header-title-container">
            <div className="bus-dialog--header-title">
              <h5 className="bp4-heading" data-testid="bus-dialog-name">
                {bus_name}
              </h5>
              <Button
                icon="cross"
                color="#5f6b7c"
                minimal
                small
                onClick={handleClose}
              />
            </div>
            <Tag round data-testid="bus-dialog-mwe">
              {mw_energy} MWE
            </Tag>
            <Tag round intent="primary" data-testid="bus-dialog-mwc">
              {mw_capacity} MWC
            </Tag>
          </div>
        </div>

        <table data-testid="bus-dialog-table">
          <thead>
            <tr>
              <th>Triggered constraints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bp4-text-disabled">Allocated cost</td>
              <td data-testid="bus-dialog-allocated-cost">
                {formatCurrency(allocated_cost)}
              </td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Total cost</td>
              <td data-testid="bus-dialog-total-cost">
                {formatCurrency(total_cost)}
              </td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Number of constraints</td>
              <td data-testid="bus-dialog-constraints">
                {number_constraints} constraints
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Bus details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bp4-text-disabled">Bus ID</td>
              <td data-testid="bus-dialog-bus-id">{bus_id}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Voltage</td>
              <td data-testid="bus-dialog-voltage">{voltage}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Owner</td>
              <td data-testid="bus-dialog-owner">{owner}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Coordinates</td>
              <td data-testid="bus-dialog-coordinates">
                ({latitude}, {longitude})
              </td>
            </tr>
          </tbody>
        </table>
      </DialogBody>
    </Dialog>
  );
};
